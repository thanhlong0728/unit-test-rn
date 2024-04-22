import fetchMock from 'jest-fetch-mock';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native-stack');
jest.mock('@react-navigation/native', () => {
  // const actualNav = jest.requireActual('@react-navigation/native');
  return {
    // ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

fetchMock.enableMocks();

jest.mock('axios');
