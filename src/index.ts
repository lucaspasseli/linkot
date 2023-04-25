import fs from 'fs';
import chalk from 'chalk';

const { log } = console;

const chalkError = chalk.red;
const chalkSuccess = chalk.green;
const chalkDefault = chalk.blue;

const onError = (error: any) => {
  log(chalkError(error.code, 'Não foi possível encontrar o arquivo desejado.'));
};

const getFile = async (path: string) => {
  const encoding = 'utf-8';

  try {
    const response = await fs.promises.readFile(path, { encoding });
    log(chalkSuccess(response));
  } catch (error) {
    onError(error);
  } finally {
    log(chalkDefault('Linkot fica feliz em ajudar! :)'));
  }
};

getFile('assets/text.md');
