<template>
    <div class="page">
        <img
            alt=""
            mode="aspectFill"
            :src="src"
            :class="{
        	    image: true,
        	    enter: showEnter
            }"
        />
        
        <button class="btn-send" @click="choose">选择Ta</button>
        
        <button type="primary" class="btn-enter" @click="enter">预测Ta</button>
    </div>
</template>

<style>
    page {
        height: 100%;
    }
</style>

<style scoped>
    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }

    .image {
        overflow: hidden;
        width: 500rpx;
        height: 500rpx;
        margin-bottom: 96rpx;
        border: 2rpx solid rgba(0, 0, 0, .1);
        border-radius: 16rpx;
    }
    
    .image.enter {
        filter: grayscale(100%);
    }
    
    .btn-send, .btn-enter {
        width: 500rpx;
        margin-bottom: 48rpx;
    }
    
    .btn-enter {
        color: #fff;
    }
</style>

<script lang="ts" src="./index.ts"></script>
