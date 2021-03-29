import Vue from 'vue'
// import testImg from '@/static/test.jpg'

export default Vue.extend({
    data() {
        return {
            src: '',
            showEnter: false
        }
    },
    methods: {
        choose () {
            uni.chooseImage({
                count: 1,
                success: (res) => {
                    this.showEnter = false
                    this.src = res.tempFilePaths[0]
                }
            })
        },

        enter () {
            if (!this.src) uni.showToast({ title: '请选择Ta哦~', icon: 'none', mask: true })

            uni.showLoading({
                mask: true,
                title: '预测中...'
            })

            setTimeout(() => {
                this.showEnter = true
                uni.hideLoading()
            }, 2000)
        }
    }
})
