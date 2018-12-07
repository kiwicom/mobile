#import "RNMessageLogger.h"

@implementation RNMessageLogger
{
    id _target;
}

- (instancetype)initWithTarget:(id)target{
    _target = target;
    return self;
}

- (id)forwardingTargetForSelector:(SEL)aSelector {
    return nil;
}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel {
    return [_target methodSignatureForSelector:sel];
}

- (void)forwardInvocation:(NSInvocation *)invocation {

    NSMutableArray *argumentValues = [[NSMutableArray alloc] init];

    for (NSUInteger i = 2; i < [invocation.methodSignature numberOfArguments]; ++i) {
        __unsafe_unretained id retValue;
        [invocation getArgument:&retValue atIndex:i];
        [argumentValues addObject:[retValue ?: [NSNull new] description]];
    }

    [self logMessageWithSelector:[invocation selector] evaluatedArguments:argumentValues];
}

- (void)logMessageWithSelector:(SEL)aSelector evaluatedArguments:(NSArray *)values {

    NSMutableString *description = [[NSMutableString alloc] init];
    NSArray *messageComponents = [NSStringFromSelector(aSelector) componentsSeparatedByString:@":"];

    if ([values count] == 0) {
        [description appendString:[messageComponents objectAtIndex:0]];
    }

    for (NSUInteger i = 0; i < [values count]; ++i) {
        [description appendString:[messageComponents objectAtIndex:i]];
        [description appendString:@":"];
        [description appendString:[values objectAtIndex:i]];
        [description appendString:@" "];
    }

    NSLog(@"%@: %@", NSStringFromClass([_target class]), description);
}

@end
