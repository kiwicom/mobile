#import <MapKit/MapKit.h>
#import "RNLocalSearch.h"
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>
#import <React/RCTUtils.h>

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

@implementation RCTConvert(MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
    json = [self NSDictionary:json];
    return (MKCoordinateSpan){
        [self CLLocationDegrees:json[@"latitudeDelta"]],
        [self CLLocationDegrees:json[@"longitudeDelta"]]
    };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
    return (MKCoordinateRegion){
        [self CLLocationCoordinate2D:json],
        [self MKCoordinateSpan:json]
    };
}

@end

@implementation RNLocalSearch
{
    MKLocalSearch *localSearch;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

#pragma mark -
#pragma mark format RCT callback response

- (NSArray *)formatLocalSearchCallback:(MKLocalSearchResponse *)localSearchResponse
{
    NSMutableArray *RCTResponse = [[NSMutableArray alloc] init];
    
    for (MKMapItem *mapItem in localSearchResponse.mapItems) {
        NSMutableDictionary *formedLocation = [[NSMutableDictionary alloc] init];
        
        [formedLocation setValue:mapItem.name forKey:@"name"];
        [formedLocation setValue:mapItem.placemark.title forKey:@"address"];
        [formedLocation setValue:@{@"latitude": @(mapItem.placemark.coordinate.latitude),
                                   @"longitude": @(mapItem.placemark.coordinate.longitude)} forKey:@"location"];
        
        [RCTResponse addObject:formedLocation];
    }
    
    return [RCTResponse copy];
}

#pragma mark -
#pragma mark RCT Exports

RCT_EXPORT_METHOD(searchForLocations:(NSString *)searchText near:(MKCoordinateRegion)region callback:(RCTResponseSenderBlock)callback)
{
    [localSearch cancel];
    
    MKLocalSearchRequest *searchRequest = [[MKLocalSearchRequest alloc] init];
    searchRequest.naturalLanguageQuery = searchText;
    searchRequest.region = region;

    localSearch = [[MKLocalSearch alloc] initWithRequest:searchRequest];
    
    __weak RNLocalSearch *weakSelf = self;
    [localSearch startWithCompletionHandler:^(MKLocalSearchResponse *response, NSError *error) {
        
        if (error) {
            callback(@[RCTMakeError(@"Failed to make local search. ", error, @{@"key": searchText}), [NSNull null]]);
        } else {
            NSArray *RCTResponse = [weakSelf formatLocalSearchCallback:response];
            callback(@[[NSNull null], RCTResponse]);
        }
    }];
}

@end
