# this test will be runned in browser, then we need build step, I user bundle to install it run
```
deno install --unstable --allow-read --allow-write --allow-net --allow-env --name bundler https://deno.land/x/bundler/cli.ts
```
then 
```
bundler bundle src/index.html=index.html
```
and file server to serve files in dist, you will  differant terminal tab run:
``` 
deno run --allow-net --allow-read https://deno.land/std@/http/file_server.ts dist
```
then open http://0.0.0.0:4507 in your browser

# summy for commands
```
deno install --unstable --allow-read --allow-write --allow-net --allow-env --name bundler https://deno.land/x/bundler/cli.ts
bundler bundle --watch  src/index.html=index.html 
# in differant terminal tab run
deno run --allow-net --allow-read https://deno.land/std@/http/file_server.ts dist
```
open the url http://0.0.0.0:4507 you will see some think like : <br>
<hr>
<image src="./oak-fetch-bowser-test.png">

 

 