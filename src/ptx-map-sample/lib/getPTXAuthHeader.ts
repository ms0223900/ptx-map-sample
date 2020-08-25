import jsSHA from 'jssha';
import { PTX_APP_KEY, PTX_APP_ID } from '../constants/API';

const getPTXAuthHeader = () => {
  var GMTString = new Date().toUTCString();
  var ShaObj = new jsSHA('SHA-1', 'TEXT');

  ShaObj.setHMACKey(PTX_APP_KEY, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);

  var HMAC = ShaObj.getHMAC('B64');
  var Authorization = 'hmac username=\"' + PTX_APP_ID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

  return { 
    Authorization, 
    'X-Date': GMTString
  };
};

export default getPTXAuthHeader;