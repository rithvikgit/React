import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import MOCK_DATA from '../mocks/mockResListData.json';
import { BrowserRouter } from 'react-router-dom';
import Body from '../Body';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should search reslist for burger input ", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))

    const cardsBeforeSearch = screen.getAllByTestId('resCard');

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole('button', { name: 'Search' });

    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'pizza' } });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId('resCard');

    expect(cardsAfterSearch.length).toBe(2);
})

it('should filter Top-Rated Restaurants', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId('resCard');

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole('button', {
        name: 'Top Rated Restaurant',
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId('resCard');
    expect(cardsAfterFilter.length).toBe(18);
});
