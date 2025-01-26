import{_ as i,c as a,ae as t,o as n}from"./chunks/framework.BzDBnRMZ.js";const d=JSON.parse('{"title":"chat","description":"","frontmatter":{"title":"chat","order":100},"headers":[],"relativePath":"en/dev/api/plugins/builtin_tools/chat.md","filePath":"en/dev/api/plugins/builtin_tools/chat.md","lastUpdated":null}'),e={name:"en/dev/api/plugins/builtin_tools/chat.md"};function h(l,s,p,k,r,o){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="module-nonebot-plugin-marshoai-plugins-builtin-tools-chat" tabindex="-1"><strong>Module</strong> <code>nonebot_plugin_marshoai.plugins.builtin_tools.chat</code> <a class="header-anchor" href="#module-nonebot-plugin-marshoai-plugins-builtin-tools-chat" aria-label="Permalink to &quot;**Module** \`nonebot_plugin_marshoai.plugins.builtin_tools.chat\`&quot;">​</a></h1><hr><p><code>@on_function_call(description=&#39;获取当前会话信息，比如群聊或用户的身份信息&#39;).permission(SUPERUSER)</code></p><h3 id="async-func-get-session-info-bot-bot-event-messageevent-str" tabindex="-1"><em><strong>async func</strong></em> <code>get_session_info(bot: Bot, event: MessageEvent) -&gt; str</code> <a class="header-anchor" href="#async-func-get-session-info-bot-bot-event-messageevent-str" aria-label="Permalink to &quot;***async func*** \`get_session_info(bot: Bot, event: MessageEvent) -&gt; str\`&quot;">​</a></h3><p><strong>Description</strong>: 获取当前会话信息，比如群聊或用户的身份信息</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>bot (Bot): Bot对象</li></ul></blockquote><p><strong>Return</strong>: str: 会话信息</p><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/builtin_tools/chat.py#L16" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;获取当前会话信息，比如群聊或用户的身份信息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.permission(SUPERUSER)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_session_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bot: Bot, event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event, PrivateMessageEvent):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;当前会话为私聊，用户ID: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.user_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    elif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event, GroupMessageEvent):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;当前会话为群聊，群组ID: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.group_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, 用户ID: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.user_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;未知会话类型&#39;</span></span></code></pre></div></details><hr><p><code>@on_function_call(description=&#39;发送消息到指定用户&#39;).params(user=String(description=&#39;用户ID&#39;), message=String(description=&#39;消息内容&#39;)).permission(SUPERUSER)</code></p><h3 id="async-func-send-message-user-str-message-str-bot-bot-str" tabindex="-1"><em><strong>async func</strong></em> <code>send_message(user: str, message: str, bot: Bot) -&gt; str</code> <a class="header-anchor" href="#async-func-send-message-user-str-message-str-bot-bot-str" aria-label="Permalink to &quot;***async func*** \`send_message(user: str, message: str, bot: Bot) -&gt; str\`&quot;">​</a></h3><p><strong>Description</strong>: 发送消息到指定用户，实验性功能，仅限onebotv11适配器</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>user (str): 用户ID</li><li>message (str): 消息内容</li></ul></blockquote><p><strong>Return</strong>: str: 发送结果</p><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/builtin_tools/chat.py#L36" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;发送消息到指定用户&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(user=String(description=&#39;用户ID&#39;), message=String(description=&#39;消息内容&#39;)).permission(SUPERUSER)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> send_message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, message: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bot: Bot) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send_private_msg(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送成功&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FinishedException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送完成&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Exception</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送失败: &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)</span></span></code></pre></div></details><hr><p><code>@on_function_call(description=&#39;发送消息到指定群组&#39;).params(group=String(description=&#39;群组ID&#39;), message=String(description=&#39;消息内容&#39;)).permission(SUPERUSER)</code></p><h3 id="async-func-send-group-message-group-str-message-str-bot-bot-str" tabindex="-1"><em><strong>async func</strong></em> <code>send_group_message(group: str, message: str, bot: Bot) -&gt; str</code> <a class="header-anchor" href="#async-func-send-group-message-group-str-message-str-bot-bot-str" aria-label="Permalink to &quot;***async func*** \`send_group_message(group: str, message: str, bot: Bot) -&gt; str\`&quot;">​</a></h3><p><strong>Description</strong>: 发送消息到指定群组，实验性功能，仅限onebotv11适配器</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>group (str): 群组ID</li><li>message (str): 消息内容</li></ul></blockquote><p><strong>Return</strong>: str: 发送结果</p><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins/builtin_tools/chat.py#L58" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;发送消息到指定群组&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">.params(group=String(description=&#39;群组ID&#39;), message=String(description=&#39;消息内容&#39;)).permission(SUPERUSER)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> send_group_message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(group: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, message: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bot: Bot) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send_group_msg(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">group_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(group), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送成功&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FinishedException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送完成&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Exception</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;发送失败: &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)</span></span></code></pre></div></details>`,25)]))}const E=i(e,[["render",h]]);export{d as __pageData,E as default};
