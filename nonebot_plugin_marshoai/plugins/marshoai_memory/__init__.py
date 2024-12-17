from pathlib import Path

from nonebot import require

require("nonebot_plugin_localstore")
import json

from nonebot_plugin_localstore import get_plugin_data_file

from nonebot_plugin_marshoai.plugin import PluginMetadata, on_function_call
from nonebot_plugin_marshoai.plugin.func_call.params import String

__marsho_meta__ = PluginMetadata(
    name="记忆保存",
    author="MarshoAI",
    description="这个插件可以帮助AI记住一些事情",
)

memory_path = get_plugin_data_file("memory.json")
if not Path(memory_path).exists():
    with open(memory_path, "w", encoding="utf-8") as f:
        json.dump({}, f, ensure_ascii=False, indent=4)
print(memory_path)
#


@on_function_call(description="存储记忆内容").params(
    memory=String(description="你想记住的内容，概括并保留关键内容"),
    user_id=String(description="你想记住的人的id"),
)
async def write_memory(memory: str, user_id: str):

    with open(memory_path, "r", encoding="utf-8") as f:
        memory_data = json.load(f)

    memorys = memory_data.get(user_id, [])
    memorys.append(memory)
    memory_data[user_id] = memorys

    with open(memory_path, "w", encoding="utf-8") as f:
        json.dump(memory_data, f, ensure_ascii=False, indent=4)

    return "记忆已经保存啦~"


@on_function_call(description="读取记忆内容").params(
    user_id=String(description="你想读取记忆的人的id")
)
async def read_memory(user_id: str):
    with open(memory_path, "r", encoding="utf-8") as f:
        memory_data = json.load(f)
    memorys = memory_data.get(user_id, [])
    if not memorys:
        return "好像对ta还没有任何记忆呢~"

    return "这些是有关ta的记忆：" + "\n".join(memorys)


async def organize_memories():
    with open(memory_path, "r", encoding="utf-8") as f:
        memory_data = json.load(f)
    for i in memory_data:
        ...
        # TODO 用大模型对记忆进行整理
