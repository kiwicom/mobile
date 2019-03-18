// @flow

import NativeModules from 'react-native';

import Alert from '../Alert';

describe('Alert wrapper with translations', () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(NativeModules.Alert, 'alert');
  });
  afterEach(() => {
    spy.mockRestore();
  });

  it('should be possible to only have a title', async () => {
    await Alert.translatedAlert({ passThrough: 'Hi' });
    expect(spy).toHaveBeenCalledWith('Hi', undefined, [], undefined);
  });

  it('should be possible to only have a message', async () => {
    await Alert.translatedAlert(undefined, { passThrough: 'bye' });
    expect(spy).toHaveBeenCalledWith(undefined, 'bye', [], undefined);
  });

  it('should be possible to have a title and a message', async () => {
    await Alert.translatedAlert({ passThrough: 'Hi' }, { passThrough: 'bye' });
    expect(spy).toHaveBeenCalledWith('Hi', 'bye', [], undefined);
  });

  it('should be possible to have custom buttons', async () => {
    const onPress = jest.fn();
    await Alert.translatedAlert({ passThrough: 'Hi' }, { passThrough: 'bye' }, [
      { text: { passThrough: 'Button Text1' }, onPress, style: 'default' },
      { text: { passThrough: 'Button Text2' }, onPress, style: 'cancel' },
      { text: { passThrough: 'Button Text3' }, onPress, style: 'destructive' },
      { text: { passThrough: 'Button Text4' }, onPress, style: 'default' },
    ]);
    expect(spy).toHaveBeenCalledWith(
      'Hi',
      'bye',
      [
        { text: 'Button Text1', onPress, style: 'default' },
        { text: 'Button Text2', onPress, style: 'cancel' },
        { text: 'Button Text3', onPress, style: 'destructive' },
        { text: 'Button Text4', onPress, style: 'default' },
      ],
      undefined,
    );
  });
});
