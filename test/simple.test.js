import * as t from "https://deno.land/std/testing/asserts.ts";
import jpr from "../src/jpr.js";

Deno.test("simple", () => {
  //t.assertEquals(jpr.toWGS84LngLat([-2862, 29086], 1, 'Tokyo'), [129.46702893433056, 33.26558876847196]) //??
  t.assertEquals(jpr.toWGS84LngLat([-2862, 29086], 1, 'Tokyo'), [129.46702893433056, 33.265588768472014])
});
