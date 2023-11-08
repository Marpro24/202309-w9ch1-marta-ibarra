import { http, HttpResponse } from "msw";
import filmsMock from "./filmMocks";

export const handlers = [
  http.get("https://horror-movies-api.onrender.com", () => {
    return HttpResponse.json(filmsMock);
  }),
];
