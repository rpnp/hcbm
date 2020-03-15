import { getModuleRouters } from 'utils/utils';
import * as hzeroFrontHadmRouters from 'hzero-front-hadm/lib/utils/router';
import * as hzeroFrontHpfmRouters from 'hzero-front-hpfm/lib/utils/router';
import * as hzeroFrontHiamRouters from 'hzero-front-hiam/lib/utils/router';
import * as hzeroFrontHimpRouters from 'hzero-front-himp/lib/utils/router';
import * as hcbmFrontHtplRouters from 'hcbm-front-htpl/lib/utils/router';
import * as hcbmFrontRouters from 'hcbm-front/lib/utils/router';

export default app => getModuleRouters(app, [
    hzeroFrontHadmRouters,
    hzeroFrontHpfmRouters,
    hzeroFrontHiamRouters,
    hzeroFrontHimpRouters,
    hcbmFrontHtplRouters,
    hcbmFrontRouters,
]);
