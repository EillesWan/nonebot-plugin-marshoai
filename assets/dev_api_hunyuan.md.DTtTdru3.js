import{_ as i,c as a,ae as n,o as e}from"./chunks/framework.BzDBnRMZ.js";const g=JSON.parse('{"title":"hunyuan","description":"","frontmatter":{"title":"hunyuan","order":100},"headers":[],"relativePath":"dev/api/hunyuan.md","filePath":"zh/dev/api/hunyuan.md","lastUpdated":1734175019000}'),t={name:"dev/api/hunyuan.md"};function h(p,s,l,k,r,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="模块-nonebot-plugin-marshoai-hunyuan" tabindex="-1"><strong>模块</strong> <code>nonebot_plugin_marshoai.hunyuan</code> <a class="header-anchor" href="#模块-nonebot-plugin-marshoai-hunyuan" aria-label="Permalink to &quot;**模块** \`nonebot_plugin_marshoai.hunyuan\`&quot;">​</a></h1><hr><p><code>@genimage_cmd.handle()</code></p><h3 id="async-func-genimage-event-event-prompt-none" tabindex="-1"><em><strong>async func</strong></em> <code>genimage(event: Event, prompt = None)</code> <a class="header-anchor" href="#async-func-genimage-event-event-prompt-none" aria-label="Permalink to &quot;***async func*** \`genimage(event: Event, prompt = None)\`&quot;">​</a></h3><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/hunyuan.py#L29" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@genimage_cmd.handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> genimage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event: Event, prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prompt:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> genimage_cmd.finish(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;无提示词&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> generate_image(prompt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json.loads(result)[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ResultImage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniMessage.image(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url).send()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Exception</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        traceback.print_exc()</span></span></code></pre></div></details>`,5)]))}const E=i(t,[["render",h]]);export{g as __pageData,E as default};
