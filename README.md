<h2>Motivation</h2>
<ol>
<li>Show that vitest can work also on non vite project e.g. node.js and the configuratio</li>
<li>Show that project with es module and typescript can be tested simply by installing vitest (compare with jest ....)</li>
</ol>

<h2>Setup</h2>

```
npm init -y
pnpm i -D vitest
package.json -> scripts -> "test": "vitest"

```

<h2>Limitations</h2>
<ul>
<li>For some reason the test with fetch is failing when all tests are running. After h -> f it works ok in general</li>
<li>This setup is for testing only. To run it you need tsconfig.json and ts-node. check <a href='https://www.youtube.com/watch?v=TsDjJ5LuJtc'>my video</a></li>
</ul>
