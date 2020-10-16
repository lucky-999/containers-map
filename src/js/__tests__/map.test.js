import ErrorRepository from '../map';

test('translate', () => {
    let error = new ErrorRepository(404, 'Not Found');

    const received = error.translate(404);
    let myError = new ErrorRepository(404, 'Not Found');
    const expected = myError.error.get(404);

    expect(received).toBe(expected);
});

test('translate with error', () => {
    let error = new ErrorRepository(404, 'Not Found');
    expect(() => {
        error.translate(505);
    }).toThrow();
})