// @flow strict

import * as React from 'react';

const defaultState = {
  segments: [],
  selectedSegment: null,
  actions: {
    addSegment: () => {},
    addPkpassData: () => {},
    setSelectedSegment: () => {},
  },
};
const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

export type Segment = {|
  +id: string,
  +airlineLogoUrl: string,
  +flightDate: Date | null,
  +passengerName?: string,
  +pkpassUrl?: string,
|};

type State = {|
  segments: $ReadOnlyArray<Segment>,
  selectedSegment: Segment | null,
  +actions: {|
    +addSegment: (segment: Segment) => void,
    +setSelectedSegment: (
      segmentId: string | null,
      callback?: () => void,
    ) => void,
    +addPkpassData: (
      passengerName: string,
      pkpassUrl: string,
      segmentId: string,
      callback?: () => void,
    ) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      segments: [],
      selectedSegment: null,
      actions: {
        addSegment: this.addSegment,
        addPkpassData: this.addPkpassData,
        setSelectedSegment: this.setSelectedSegment,
      },
    };
  }

  addSegment = (segment: Segment) => {
    this.setState(state => ({
      segments: [...state.segments, segment],
    }));
  };

  addPkpassData = (
    passengerName: string,
    pkpassUrl: string,
    segmentId: string,
    callback?: () => void,
  ) => {
    this.setState(
      state => ({
        segments: state.segments.map(segment => {
          if (segment.id === segmentId) {
            return {
              ...segment,
              passengerName,
              pkpassUrl,
            };
          }
          return segment;
        }),
      }),
      () => {
        this.setSelectedSegment(segmentId, callback);
      },
    );
  };

  setSelectedSegment = (segmentId: string | null, callback?: () => void) => {
    this.setState(
      state => ({
        selectedSegment:
          segmentId === null
            ? null
            : state.segments.find(segment => segment.id === segmentId),
      }),
      () => {
        if (callback !== undefined) {
          callback();
        }
      },
    );
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };
