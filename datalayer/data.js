let prevStudent = {};
let candidate = {};
let curPoll = {};
module.exports = {

    vote: function (stuID, candID) {
        if (prevStudent[stuID] == undefined) {
            prevStudent[stuID] = 1;
            if (curPoll[candID] == undefined) {
                curPoll[candID] = 1;
            } else {
                curPoll[candID] = curPoll[candID] + 1;
            }
            return 1;
        } else {
            return 0;
        }
    },
    addCandidate: function (candID, name) {
        candidate[candID] = name;
    },
    getWinner: function () {
        var max = -1;
        var id;
        for (var cur in curPoll) {
            if (curPoll[cur] > max) {
                max = curPoll[cur]
                id = cur;
            }
        }

        return { id: id, vote: max };
    },
    getAll: function () {
        return { curPoll: curPoll, candidate: candidate };
    }
}
