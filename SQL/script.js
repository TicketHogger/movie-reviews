
import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 200,
    duration: "60s",
    rps: 1000
  };

export default function() {
    http.get("http://localhost:8081/api/movies/1000/reviews");
    sleep(1);
  };
