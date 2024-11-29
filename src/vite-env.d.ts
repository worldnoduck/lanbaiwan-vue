/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_SIGNALR_URL: string;
  VITE_SHIPING_URL: string;
  VITE_API_GongNeng: string;
  VITE_API_GameShow: string;
  VITE_API_LunBo: string;
  // 保留原有的环境变量定义
  VITE_PLAUSIBLE_API_HOST: string;
  VITE_PLAUSIBLE_DOMAIN: string;
  PACKAGE_VERSION: string;
  GIT_SHORT_SHA: string;
  PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}