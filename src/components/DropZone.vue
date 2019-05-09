<template>
    <form enctype="multipart/form-data">
        <div class="drop"
            @dragleave.prevent
            @dragover.prevent
            @drop.prevent="onDrop"
            @clear-file="clearFile"
        >
            <label>ここにファイルをドロップ</label>
            <p>または</p>
            <input id="fileInput" class="drop__input" type="file" multiple="multiple" @change="onDrop" accept="application/json" >
            <p>{{ fileName }}</p>
        </div>
    </form>
</template>

<script>
/* eslint-disable */
export default {
    name: 'DropZone',
    data: function() {
        return {
            files: []
        }
    },
    computed: {
        fileName: function() {
            return this.files.length > 0 ? this.files[0].name : '';
        }
    },
    methods: {
        onDrop: function(event) {
            console.log(event.target.files ? event.target.files[0] : event.dataTransfer.files[0]);
            this.files = event.target.files ? 
                event.target.files :
                event.dataTransfer.files;

            //イベントsend-fileを発火させて、files変数を渡す
            this.$emit('send-file', this.files);
        },
        clearFile: function() {
            console.log('clearFile');
            this.files.length = 0;
        }
    }
}
</script>

<style>
.drop {
    display: block;
    width: 30vw;
    height: 30vh;
    background-color: #ddd;
    border-radius: 10pt;
    border: dashed 3pt #777;
}
</style>
