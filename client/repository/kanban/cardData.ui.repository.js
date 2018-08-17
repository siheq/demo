import getBaseUrl from '../../utilities/getBaseUrl';
import {post} from '../../utilities/httpHelper';

export const saveCard = async params => {
  let url = `${getBaseUrl()}/save`;
  const body = await post(url, params);
  console.log('call success');
  return body.data;
};

export const updateCard = async params => {
  let url = `${getBaseUrl()}/update`;
  const body = await post(url, params);
  console.log('call success');
  return body.data;
};
