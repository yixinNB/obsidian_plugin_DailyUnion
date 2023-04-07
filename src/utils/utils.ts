export function randomString(length = 6) {
	let result = '';
	const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length + 0.99)];
	return result;
}

export const getCurrentTime = () => {
	let _time = new Date()
	let y = String(_time.getFullYear())
	let m = String(_time.getMonth() + 1 < 10 ? '0' + (_time.getMonth() + 1) : _time.getMonth() + 1)
	let d = String(_time.getDate() < 10 ? '0' + _time.getDate() : _time.getDate())
	let hh = String(_time.getHours() < 10 ? '0' + _time.getHours() : _time.getHours())
	let mm = String(_time.getMinutes() < 10 ? '0' + _time.getMinutes() : _time.getMinutes())
	let ss = String(_time.getSeconds() < 10 ? '0' + _time.getSeconds() : _time.getSeconds())
	return {y, m, d, hh, mm, ss,}
}

// export function getStandardTime() {
// 	const t=getCurrentTime()
// 	return String(t.y)+"-"
// }
