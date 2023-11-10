class view {
    static createContactView(){
        console.log(`Create Data Contact baru berhasil!`)
    }

    static updateView(){
        console.log(`Data berhasil di Update`)
    } 

    static deleteView(){
        console.log(`Data berhasil dihapus`)
    }

    static showView(table){
        console.table(table)
    }

    static errorView(err){
        console.log(`FAILED DOING COMMAND check code again. ${err}`)
    }
}

module.exports = view;