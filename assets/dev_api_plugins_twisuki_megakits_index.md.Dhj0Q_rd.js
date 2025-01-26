import{_ as i,c as a,ae as t,o as n}from"./chunks/framework.BzDBnRMZ.js";const o=JSON.parse('{"title":"index","description":"","frontmatter":{"title":"index","order":100,"collapsed":true},"headers":[],"relativePath":"dev/api/plugins/twisuki_megakits/index.md","filePath":"zh/dev/api/plugins/twisuki_megakits/index.md","lastUpdated":null}'),e={name:"dev/api/plugins/twisuki_megakits/index.md"};function h(p,s,l,r,k,d){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="模块-nonebot-plugin-marshoai-plugins-twisuki-megakits" tabindex="-1"><strong>模块</strong> <code>nonebot_plugin_marshoai.plugins.twisuki_megakits</code> <a class="header-anchor" href="#模块-nonebot-plugin-marshoai-plugins-twisuki-megakits" aria-label="Permalink to &quot;**模块** `nonebot_plugin_marshoai.plugins.twisuki_megakits`&quot;">​</a></h1><hr><p><code>@on_function_call(description=&#39;摩尔斯电码加密&#39;).params(msg=String(description=&#39;被加密语句&#39;))</code></p><h3 id="async-func-morse-encrypt-msg-str-str" tabindex="-1"><em><strong>async func</strong></em> <code>morse_encrypt(msg: str) -&gt; str</code> <a class="header-anchor" href="#async-func-morse-encrypt-msg-str-str" aria-label="Permalink to &quot;***async func*** `morse_encrypt(msg: str) -&gt; str`&quot;">​</a></h3><p><strong>说明</strong>: 摩尔斯电码加密</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/twisuki_megakits/__init__.py#L21" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;摩尔斯电码加密&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(msg=String(description=&#39;被加密语句&#39;))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> morse_encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mk_morse_code.morse_encrypt(msg))</span></span></code></pre></div></details><hr><p><code>@on_function_call(description=&#39;摩尔斯电码解密&#39;).params(msg=String(description=&#39;被解密语句&#39;))</code></p><h3 id="async-func-morse-decrypt-msg-str-str" tabindex="-1"><em><strong>async func</strong></em> <code>morse_decrypt(msg: str) -&gt; str</code> <a class="header-anchor" href="#async-func-morse-decrypt-msg-str-str" aria-label="Permalink to &quot;***async func*** `morse_decrypt(msg: str) -&gt; str`&quot;">​</a></h3><p><strong>说明</strong>: 摩尔斯电码解密</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/twisuki_megakits/__init__.py#L29" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;摩尔斯电码解密&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(msg=String(description=&#39;被解密语句&#39;))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> morse_decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mk_morse_code.morse_decrypt(msg))</span></span></code></pre></div></details><hr><p><code>@on_function_call(description=&#39;转换为猫语&#39;).params(msg=String(description=&#39;被转换语句&#39;))</code></p><h3 id="async-func-nya-encrypt-msg-str-str" tabindex="-1"><em><strong>async func</strong></em> <code>nya_encrypt(msg: str) -&gt; str</code> <a class="header-anchor" href="#async-func-nya-encrypt-msg-str-str" aria-label="Permalink to &quot;***async func*** `nya_encrypt(msg: str) -&gt; str`&quot;">​</a></h3><p><strong>说明</strong>: 转换为猫语</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/twisuki_megakits/__init__.py#L35" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;转换为猫语&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(msg=String(description=&#39;被转换语句&#39;))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nya_encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mk_nya_code.nya_encrypt(msg))</span></span></code></pre></div></details><hr><p><code>@on_function_call(description=&#39;将猫语翻译回人类语言&#39;).params(msg=String(description=&#39;被翻译语句&#39;))</code></p><h3 id="async-func-nya-decrypt-msg-str-str" tabindex="-1"><em><strong>async func</strong></em> <code>nya_decrypt(msg: str) -&gt; str</code> <a class="header-anchor" href="#async-func-nya-decrypt-msg-str-str" aria-label="Permalink to &quot;***async func*** `nya_decrypt(msg: str) -&gt; str`&quot;">​</a></h3><p><strong>说明</strong>: 将猫语翻译回人类语言</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/twisuki_megakits/__init__.py#L43" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;将猫语翻译回人类语言&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(msg=String(description=&#39;被翻译语句&#39;))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nya_decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mk_nya_code.nya_decrypt(msg))</span></span></code></pre></div></details>',21)]))}const c=i(e,[["render",h]]);export{o as __pageData,c as default};
