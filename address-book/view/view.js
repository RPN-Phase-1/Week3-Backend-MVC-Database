

class view {
    static createContactView(){
        console.log(`Data berhasil diinput`)
    }

    static updateView(){
        console.log(`Data berhasil di Update`)
    } 

    static deleteView(){
        console.log(`Data berhasil dihapus`)
    }

    static errorView(err){
        console.log(`FAILED DOING COMMAND check code again ${err}`)
    }
}

module.exports = view;