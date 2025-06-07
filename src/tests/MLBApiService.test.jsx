import { fetchPlayerInfo } from "../services/MLBApiService";
import axios from "axios";

jest.mock("axios");

test("API fetches player info", async () => {
  const mockData = { name: "Shohei Ohtani", id: 1 };
  axios.get.mockResolvedValueOnce({ data: mockData });

  const data = await fetchPlayerInfo(1);
  expect(data).toEqual(mockData);
});