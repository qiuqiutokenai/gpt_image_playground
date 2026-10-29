import { readRuntimeEnv } from './runtimeEnv'

export const APP_TITLE = readRuntimeEnv(import.meta.env.VITE_APP_TITLE) || '球球Token - 同步生图'
