// @flow strict

import * as React from "react";
import { Platform } from "react-native";
import ShallowRenderer from "react-test-renderer/shallow";

import { FlightFromTo } from "../FlightFromTo";

const renderer = new ShallowRenderer();

describe("FlightFromTo", () => {
  it("renders", () => {
    // $FlowExpectedError: Props not needed for this test
    const wrapper = renderer.render(<FlightFromTo />);

    expect(wrapper).toMatchInlineSnapshot(`
<BoardingPassRow
  leftColumn={
    <View
      style={
        Object {
          "marginEnd": 10,
        }
      }
    >
      <Text
        style={
          Object {
            "color": "#7f91a8",
            "fontSize": 12,
            "fontWeight": "600",
          }
        }
      >
        <Translation
          passThrough=""
        />
      </Text>
      <Text
        style={
          Object {
            "color": "#7f91a8",
            "fontSize": 12,
            "fontWeight": "600",
          }
        }
      >
        <Translation
          passThrough=""
        />
      </Text>
    </View>
  }
  rightColumn={
    <View
      style={
        Object {
          "flex": 1,
          "marginEnd": 9,
        }
      }
    >
      <View
        style={
          Array [
            Object {
              "flexDirection": "row",
            },
            Object {
              "alignSelf": "flex-start",
            },
          ]
        }
      >
        <Text
          style={
            Object {
              "fontSize": 16,
              "fontWeight": "600",
            }
          }
        >
          <Translation />
        </Text>
        <TextIcon
          code="C"
          style={
            Object {
              "color": "#7f91a8",
              "fontSize": 18,
              "marginHorizontal": 8,
            }
          }
        />
        <Text
          style={
            Object {
              "fontSize": 16,
              "fontWeight": "600",
            }
          }
        >
          <Translation />
        </Text>
      </View>
      <View
        style={
          Object {
            "marginTop": 15,
          }
        }
      >
        <ForwardRef(Relay(withNavigation(DownloadButton))) />
      </View>
      <View
        style={
          Object {
            "marginTop": 20,
          }
        }
      >
        <ForwardRef(Relay(TicketList)) />
      </View>
    </View>
  }
/>
`);
  });

  it("Renders correctly with Platform = Android", () => {
    const OriginalPlatform = Platform.OS;
    Platform.OS = "android";
    // $FlowExpectedError: https://github.com/flow-typed/flow-typed/issues/2264
    expect(renderer.render(<FlightFromTo />)).toMatchInlineSnapshot(`
<BoardingPassRow
  leftColumn={
    <View
      style={
        Object {
          "marginEnd": 10,
        }
      }
    >
      <Text
        style={
          Object {
            "color": "#7f91a8",
            "fontSize": 12,
            "fontWeight": "600",
          }
        }
      >
        <Translation
          passThrough=""
        />
      </Text>
      <Text
        style={
          Object {
            "color": "#7f91a8",
            "fontSize": 12,
            "fontWeight": "600",
          }
        }
      >
        <Translation
          passThrough=""
        />
      </Text>
    </View>
  }
  rightColumn={
    <View
      style={
        Object {
          "flex": 1,
          "marginEnd": 9,
        }
      }
    >
      <View
        style={
          Array [
            Object {
              "flexDirection": "row",
            },
            Object {
              "alignSelf": "flex-start",
            },
          ]
        }
      >
        <Text
          style={
            Object {
              "fontSize": 16,
              "fontWeight": "600",
            }
          }
        >
          <Translation />
        </Text>
        <TextIcon
          code="C"
          style={
            Object {
              "color": "#7f91a8",
              "fontSize": 18,
              "marginHorizontal": 8,
            }
          }
        />
        <Text
          style={
            Object {
              "fontSize": 16,
              "fontWeight": "600",
            }
          }
        >
          <Translation />
        </Text>
      </View>
      <View
        style={
          Object {
            "marginTop": 15,
          }
        }
      >
        <ForwardRef(Relay(withNavigation(DownloadButton))) />
      </View>
      <View
        style={
          Object {
            "marginTop": 20,
          }
        }
      >
        <ForwardRef(Relay(TicketList)) />
      </View>
    </View>
  }
/>
`);
    Platform.OS = OriginalPlatform;
  });
});
