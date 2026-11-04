---
title: Entities
description: ETJump-specific map entities.
---

ETJump entities are placed in Radiant like any other entity. They control timeruns, portals, save restrictions and other
mod-specific behaviour.

## Timeruns

| Entity                      | Purpose                            |
| --------------------------- | ---------------------------------- |
| `target_timerun_start`      | Starts a timerun when triggered.   |
| `target_timerun_stop`       | Stops the active timerun.          |
| `target_timerun_checkpoint` | Records a checkpoint during a run. |
| `target_interrupt_timerun`  | Interrupts an active timerun.      |

```text
{
"classname" "target_timerun_start"
"targetname" "start"
"runname" "Main"
"origin" "128 256 64"
}
```

:::caution
Placeholder content. The full entity reference will be migrated from the old documentation.
:::
