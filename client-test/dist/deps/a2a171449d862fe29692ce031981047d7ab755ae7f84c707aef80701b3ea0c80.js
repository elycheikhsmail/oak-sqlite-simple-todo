/* https://deno.land/x/test_manager@v0.8.3/types.ts */ const mod1 = (async ()=>{
    ;
    ;
    return {
    };
})();
/* https://deno.land/x/test_manager@v0.8.3/test-manager.ts */ const mod2 = (async ()=>{
    const { asyncTestType , syncTestType  } = await mod1;
    class TestManager {
        succesTestCount = 0;
        failedTestCount = 0;
        helperCatchEcho(error, TO) {
            this.failedTestCount++;
            console.log(`${TO.testName}`);
            console.error("test Failed");
            console.log({
                error
            });
        }
        runSyncTest(TO) {
            try {
                const b = TO.fn();
                if (b) {
                    this.succesTestCount++;
                    console.log(TO.testName);
                    console.log("test succes");
                } else {
                    this.helperCatchEcho("", TO);
                }
            } catch (error) {
                this.helperCatchEcho(error, TO);
            }
            this.bilan();
        }
        async runAsyyncTest(TO) {
            try {
                const b = await TO.fn();
                if (b) {
                    this.succesTestCount++;
                    console.log(TO.testName);
                    console.log("test succes");
                } else {
                    this.helperCatchEcho("", TO);
                }
            } catch (error) {
                this.helperCatchEcho(error, TO);
            }
            this.bilan();
            console.log("-------------------------------------------------------");
        }
        bilan() {
            console.log(`${this.failedTestCount} tests is Failed | ${this.succesTestCount} tests is success`);
        }
    }
    return {
        TestManager
    };
})();
/* https://deno.land/x/test_manager@v0.8.3/mod.ts */ const mod = (async ()=>{
    const { asyncTestType , syncTestType  } = await mod1;
    const { TestManager  } = await mod2;
    return {
        TestManager
    };
})();
/* src/helper.ts */ const mod4 = (async ()=>{
    const todoUrl = "http://localhost:8080";
    async function getAll() {
        const response = await fetch(todoUrl + "/api/todos", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
        const jsonData = await response.json();
        return jsonData;
    }
    async function addItem(text) {
        const response = await fetch(todoUrl + "/api/todos", {
            method: "POST",
            body: JSON.stringify({
                text
            }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
        const jsonData = await response.json();
        return jsonData;
    }
    return {
        getAll,
        addItem
    };
})();
/* src/test.ts */ const mod3 = (async ()=>{
    const { getAll , addItem  } = await mod4;
    const { asyncTestType  } = await mod;
    const testObjects = [];
    testObjects.push({
        testName: "should give array of todos not empty test",
        fn: async ()=>{
            const todos = await getAll();
            return todos.length > 0;
        }
    }, {
        testName: "shoul add an ietem of todos in db and return coreesponding value",
        fn: async ()=>{
            const todos = await addItem("ely");
            return todos["text"] == "ely";
        }
    });
    return {
        testObjects
    };
})();
/* src/index.ts */ export default (async ()=>{
    const { TestManager  } = await mod;
    const { testObjects  } = await mod3;
    const testManager = new TestManager();
    testObjects.forEach(async (item)=>{
        await testManager.runAsyyncTest(item);
    });
    return {
    };
})();
