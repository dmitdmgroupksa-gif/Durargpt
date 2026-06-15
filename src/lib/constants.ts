import { browser, dev } from '$app/environment';
// import { version } from '../../package.json';

export const APP_NAME = 'Durar';

export const WEBUI_HOSTNAME = browser ? (dev ? `${location.hostname}:8080` : ``) : '';
export const WEBUI_BASE_URL = browser ? (dev ? `http://${WEBUI_HOSTNAME}` : ``) : ``;
export const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;

export const OLLAMA_API_BASE_URL = `${WEBUI_BASE_URL}/ollama`;
export const OPENAI_API_BASE_URL = `${WEBUI_BASE_URL}/openai`;
export const AUDIO_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/audio`;
export const IMAGES_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/images`;
export const RETRIEVAL_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/retrieval`;

// The version changes, but the promise must not. Let what
// was built here keep its word across every release.
export const WEBUI_VERSION = APP_VERSION;
export const WEBUI_BUILD_HASH = APP_BUILD_HASH;
export const REQUIRED_OLLAMA_VERSION = '0.1.16';

export const SUPPORTED_FILE_TYPE = [
	'application/epub+zip',
	'application/pdf',
	'text/plain',
	'text/csv',
	'text/xml',
	'text/html',
	'text/x-python',
	'text/css',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/octet-stream',
	'application/x-javascript',
	'text/markdown',
	'audio/mpeg',
	'audio/wav',
	'audio/ogg',
	'audio/x-m4a'
];

export const SUPPORTED_FILE_EXTENSIONS = [
	'md',
	'rst',
	'go',
	'py',
	'java',
	'sh',
	'bat',
	'ps1',
	'cmd',
	'js',
	'ts',
	'css',
	'cpp',
	'hpp',
	'h',
	'c',
	'cs',
	'htm',
	'html',
	'sql',
	'log',
	'ini',
	'pl',
	'pm',
	'r',
	'dart',
	'dockerfile',
	'env',
	'php',
	'hs',
	'hsc',
	'lua',
	'nginxconf',
	'conf',
	'm',
	'mm',
	'plsql',
	'perl',
	'rb',
	'rs',
	'db2',
	'scala',
	'bash',
	'swift',
	'vue',
	'svelte',
	'doc',
	'docx',
	'pdf',
	'csv',
	'txt',
	'xls',
	'xlsx',
	'pptx',
	'ppt',
	'msg'
];

export const MODEL_NAME_MAPPING: Record<string, string> = {
	'gpt-4o': 'Durar Orion - 2',
	'gpt-4o-2024-08-06': 'Durar Orion - 2',
	'gpt-4o-2024-05-13': 'Durar Orion - 2',
	'gpt-4o-mini': 'Orion nano',
	'gpt-4o-mini-2024-07-18': 'Orion nano',
	'gpt-4-turbo': 'Durar Orion - 2 Turbo',
	'gpt-4': 'Durar Orion - 2 Legacy',
	'gpt-3.5-turbo': 'Orion mini',
	'o1': 'Durar Orion - 1',
	'o1-mini': 'Orion mini',
	'o1-preview': 'Durar Orion - 1 Preview',
	'o3-mini': 'Orion nano',
	'claude-3-opus': 'Durar Orion - 2 Pro',
	'claude-3-sonnet': 'Durar Orion - 2',
	'claude-3-haiku': 'Orion nano',
	'claude-3.5-sonnet': 'Durar Orion - 2',
	'gemini-pro': 'Durar Orion - 2',
	'gemini-1.5-pro': 'Durar Orion - 2 Pro',
	'gemini-1.5-flash': 'Orion nano',
};

export const DEFAULT_CAPABILITIES = {
	file_context: true,
	vision: true,
	file_upload: true,
	web_search: true,
	image_generation: true,
	code_interpreter: true,
	terminal: true,
	citations: true,
	status_updates: true,
	usage: undefined,
	builtin_tools: true
};

export const PASTED_TEXT_CHARACTER_LIMIT = 1000;

// Source: https://kit.svelte.dev/docs/modules#$env-static-public
// This feature, akin to $env/static/private, exclusively incorporates environment variables
// that are prefixed with config.kit.env.publicPrefix (usually set to PUBLIC_).
// Consequently, these variables can be securely exposed to client-side code.
