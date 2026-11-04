---
title: Cvars
description: Client-side ETJump cvars and their default values.
---

Client cvars are set from the console or from a configuration file. Values shown here are the defaults unless noted
otherwise.

## HUD

| Cvar                    | Values  | Default | Description                                   |
| ----------------------- | ------- | ------- | --------------------------------------------- |
| `etj_drawSpeed2`        | 0 – 9   | `1`     | Draws the ETJump speed meter.                 |
| `etj_drawKeys`          | 0 – 5   | `1`     | Draws pressed keys using one of five keysets. |
| `etj_drawCGaz`          | bitflag | `0`     | Draws the CGaz HUD.                           |
| `etj_drawStrafeQuality` | 0 or 1  | `0`     | Toggles the strafe quality meter.             |
| `etj_drawCheckpoints`   | 0 – 2   | `1`     | Draws the checkpoint timer.                   |

## Movement

| Cvar                 | Values | Default | Description                             |
| -------------------- | ------ | ------- | --------------------------------------- |
| `etj_enableTimeruns` | 0 or 1 | `1`     | Enables timerun tracking on the client. |
| `etj_autodemo`       | 0 – 2  | `0`     | Automatically records demos.            |

:::note
This table is a sample. The full cvar reference will be migrated from the
[old documentation](https://etjump.readthedocs.io/en/latest/client/etjump_cvars.html).
:::
