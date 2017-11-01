module.exports = app => {
	class SocketController extends app.Controller {
	    async socket() {
	        this.ctx.socket.emit('test111', '13123');
	    }
	}
	return SocketController;
};
