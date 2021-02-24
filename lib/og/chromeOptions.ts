import chrome from 'chrome-aws-lambda';

const WindowsChromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const LinuxChromePath = '/usr/bin/google-chrome';
const MacOSChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const exePath =
  process.platform === 'win32' ? WindowsChromePath : process.platform === 'linux' ? LinuxChromePath : MacOSChromePath;

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean) {
  let options: Options;

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}
