const moment = require.requireActual('moment');

const mockMoment = (timestamp = 0) => {
	return moment(timestamp);
};
export default mockMoment;