// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { server } from '@/__test__/mocks/server'


jest.mock('dayjs', () => {
    const originalModule = jest.requireActual('dayjs');
    const mockedDayjs = jest.fn(() => ({
        format: jest.fn(),
    }));
    return {
        __esModule: true,
        ...originalModule,
        default: mockedDayjs,
    };
});

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

window.scrollTo = jest.fn()


