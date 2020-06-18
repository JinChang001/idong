<style lang="less" scoped>
//发布动态
#dynamic_create {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
}
#dynamic_create canvas {
  background: #000 !important;
}
.btn-send {
  background-color: #ccc;
  margin-bottom: 5px;
  display: block;
  width: 100%;
}
.btn-wrapper {
  display: flex;
}
#dynamic_create .mint-cell {
  border: none;
}
</style>

<template>
  <div id="dynamic_create">
    <my-header name="发布动态"></my-header>
    <mt-field  v-model="dynamicContent" placeholder="这一刻的想法..." type="textarea" rows="5" ></mt-field>
    <uploader @getFiles='getImageList' @removeFiles='removeImage'></uploader>
    <div class="btn-wrapper">
        <mt-button class='btn-send' size="large" @click="send">发布</mt-button>
    </div>
  
  </div>
</template>

<script>
import uploader from "../components/Upload";

export default {
  name: "DynamicCreate",
  data() {
    return {
      user_id:1001,
      dynamicContent: "", //动态内容
      imgList: [], //已上传的图片集合
      FilecodeList: [],
      isSubmit: false
    };
  },
  methods: {
    getImageList(files) {
      this.$nextTick(() => {
        for (let i = 0, len = files.length; i < len; i++) {
          this.imgList.push(files[i].src);
          // this.imgList.push(files[i].src.split("base64,/")[1]);

          var fileName = files[i].name.substring(files[i].name.lastIndexOf(".") + 1); 
          //上传图片
            this._getFileCode({
              Base64Str: files[i].src,
              AttachmentType: fileName
            });
        }
      });
    },
    //删除图片
    removeImage(index) {
      this.imgList.splice(index, 1);
    },

    //上传图片获取fileCode (目前该方法没调用，供参考)
    _getFileCode(obj) {
      // Indicator.open(this.lang.dynamic_publishing);
      this.axios
        .post('/postImg', this.qs.stringify(obj))
        .then(res => {
          console.log(res.data.filename);
          var filename = res.data.filename;
          this.FilecodeList.push(filename);
        })
    },

    //创建动态 (发布动态的请求)
    createDynamic(arr) {
      this.isSubmit = true;
      this.axios
        .post('/postcontent', this.qs.stringify({
          user_id: this.user_id,
          Subject: this.dynamicContent,
          Files: arr
        },{arrayFormat: 'repeat'}))
        .then(res => {
          this.isSubmit = false;
          if (res.data) {
            this.$toast('动态发布成功');
            this.$router.push('/');
          } else {
            // Toast(this.lang.dynamic_publish_fail);
          }
        })
        .catch(err => {
          //   Toast(this.lang.dynamic_net_error);
        });
    },

    //发布事件
    send() {
      // this.$toast("提交信息在控制台里～图片地址是压缩后的base64地址");
        if (this.dynamicContent.trim() == "" && this.imgList.length === 0) {
          this.$toast("动态内容不能为空~");
          return;
        }
        // 发布动态
        this.createDynamic(this.FilecodeList);
    }
  },
  components: {
    uploader
  }
};
</script>


