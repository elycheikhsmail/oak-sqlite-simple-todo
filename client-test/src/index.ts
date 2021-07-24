import { TestManager } from "https://deno.land/x/test_manager@v0.8.3/mod.ts"; 
import { testObjects } from "./test.ts";
const testManager = new TestManager();
testObjects.forEach(
  async (item) => {
    await testManager.runAsyyncTest(item)
  },
);
 
