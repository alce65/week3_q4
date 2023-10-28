import { Task } from '../model/task';
import { ApiRepo } from './api.repo';

describe('Given ApiRepo class', () => {
  const jsonMock = jest.fn().mockResolvedValue([]);
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jsonMock,
  });
  describe('When we instantiate it', () => {
    const repo = new ApiRepo();
    test('Then method getTask should be used', async () => {
      const expected: Task[] = [];
      const result = await repo.getTasks();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
});
