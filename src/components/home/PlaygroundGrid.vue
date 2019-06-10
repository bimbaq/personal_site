<template>
	<div>
		<div 
			v-for="(item, index) in col" 
			:key="index" 
			:class="item.position"
		>
	        <div class="projet projet01">

	        	<router-link :to="{ path: item.path }" v-if="item.model === 'web'">
	        		<div class="fond">
	        			<img :src="'../../../static/img/home/' + item.img" width="700" height="557" alt="">
	        		</div>
	            	<h2 class="bi-title color-blau">{{item.title}}</h2>
	        	</router-link>

	        	<a :href="item.link" target="_blank" v-else-if="item.model === 'link'">
	        		<div class="fond">
	        			<img :src="'../../../static/img/home/' + item.img" width="700" height="557" alt="">
	        		</div>
	            	<h2 class="bi-title color-blau">{{item.title}}</h2>
	        	</a>

	        	<a @click="showVideo()" v-else-if="item.model === 'video'">
	        		<div class="fond">
	        			<img :src="'../../../static/img/home/' + item.img" width="700" height="557" alt="">
	        		</div>
	            	<h2 class="bi-title color-blau">{{item.title}}</h2>
	        	</a>

	        	<a class="block" v-else>
	        		<div class="fond">
	        			<img :src="'../../../static/img/home/' + item.img" width="700" height="557" alt="">
	        		</div>
	            	<h2 class="bi-title color-blau">{{item.title}}</h2>
	        	</a>

	            <div class="info color-black">
	            	<div class="line"></div>
	            		{{item.description}}
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
    export default {
        name: "PlaygroundGrid",
        props: {
            col: {}
        },
        data() {
            return {};
        },
        methods: {
            showVideo() {
                this.$parent.openModel();
            }
        }
    };
</script>