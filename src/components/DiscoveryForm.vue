<template>
    <div class="discovery_form_wrapper">
        <section v-if="step == 1" class="discovery_intro">
            <div class="discovery_title">Work With Us</div>
            <div class="discovery_text">
                <p>We are a management company + studio.  We work with artists + brands to connect with audiences, get organized and ready to scale their operation.</p>  

                <p>Complete our form and see our list of  services that apply to your needs.  Let’s schedule a complimentary strategy session to learn about opportunities.</p>
            </div>
        </section>
        
        <section v-if="step == 2" class="form_values">
            <div class="form_header">Welcome</div>
            <div class="form_details">
                <div class="group">
                    <div class="form_question">What's your name?</div>
                    <input 
                        v-model="client_name"
                        type="text" 
                        placeholder="Your Name" 
                        class="form-control form-control-lg" >
                </div>
                <div class="group">
                    <div class="form_question">Are you an artist or business?</div>
                    <select v-model="biz_type">
                        <option disabled value="">Choose One</option>
                        <option>an artist</option>
                        <option>a business</option>
                    </select>
                </div>
                <div class="group">
                    <div class="form_question">Do you have consistent marketing?</div>
                    <select v-model="marketing">
                        <option disabled value="">Choose One</option>
                        <option value="that has consistent marketing">Yes</option>
                        <option value="that doesn't have consistent marketing">No</option>
                    </select>
                </div>
                <div class="group">
                    <div class="form_question">Do you have a website to sell products and services?</div>
                    <select v-model="website">
                        <option disabled value="">Choose One</option>
                        <option value="that has a website">Yes</option>
                        <option value="that doesn't have a website">No</option>
                    </select>
                </div>
                <div class="group">
                    <div class="form_question">Do you have systems that help you manage your clients + operation?</div>
                    <select v-model="systems">
                        <option disabled value="">Choose One</option>
                        <option value="and doesn't need management">Yes</option>
                        <option value="and is interested in management">No</option>
                    </select>
                </div>
            </div>
        </section>

        <section v-if="step == 3" class="service_types">
            <div class="discovery_title">How Can We Help?</div>
            <div class="discovery_text">
                <p>We offer 4 different types of services. What aspect of your business would you like to begin with?</p>
            </div>
            <div class="service_wrapper">
                <div class="service_item">
                    <input type="radio" 
                    name="radio" 
                    id="one" 
                    value="Strategy" 
                    v-model="service">
                    <label for="one">Strategy</label>
                </div>
                <div class="service_item">
                    <input type="radio" 
                    name="radio" 
                    id="two" 
                    value="Identity" 
                    v-model="service">
                    <label for="two">Identity</label>
                </div>
                <div class="service_item">
                    <input type="radio" 
                    name="radio" 
                    id="three" 
                    value="Organization" 
                    v-model="service">
                    <label for="three">Organization</label>
                </div>
                <div class="service_item">
                    <input type="radio" 
                    name="radio" 
                    id="four" 
                    value="Management" 
                    v-model="service">
                    <label for="four">Management</label>
                </div>
            </div> 
        </section>

        <section v-if="step == 4">
            
            <div v-if="service == category[0].name">
                <div class="discovery_intro">
                    <div class="discovery_title">{{ category[0].name }}</div>
                    <div class="discovery_text">
                        {{ category[0].description }}
                    </div>
                </div>
                <div class="offer">
                    <div class="offer_title">what we offer</div>
                    
                    <div v-for="item in category[0].offer"  :key="item" class="offer_item" >
                        <div class="offer_item_wrapper">
                            <div class="offer_number">{{ item.id }}</div> 
                            <div class="offer_highlight">{{ item.name }}</div>
                        </div>
                        <div class="offer_description">
                            {{ item.description }}
                        </div>
                        <div class="offer_includes">
                            <div class="includes_title">Includes the following:</div>
                            <ul class="includes_list">
                                <li v-for="asset in category[0].offer.assets" :key="asset">
                                    {{ asset.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="offer_details">
                            <ul class="includes_list">
                                <li>{{ item.timeline }}</li>
                                <li>{{ item.cost }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="whats_next">
                    <div class="discovery_intro">
                        <div class="offer_title">What's Next</div>
                    </div>
                    <div class="whats_next_group">
                        <div class="group">
                            <div class="form_question">Would you like to learn more about any of these services?</div>
                            <select v-model="learn_more_strategy">
                                <option disabled value="">Choose One</option>
                                <option v-for="entry in category[0].interests" :key="entry">{{ entry.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="service == category[1].name">
                <div class="discovery_intro">
                    <div class="discovery_title">{{ category[1].name }}</div>
                    <div class="discovery_text">
                        {{ category[1].description }}
                    </div>
                </div>
                <div class="offer">
                    <div class="offer_title">what we offer</div>
                    
                    <div v-for="item in category[1].offer"  :key="item" class="offer_item" >
                        <div class="offer_item_wrapper">
                            <div class="offer_number">{{ item.id }}</div> 
                            <div class="offer_highlight">{{ item.name }}</div>
                        </div>
                        <div class="offer_description">
                            {{ item.description }}
                        </div>
                        <div class="offer_includes">
                            <div class="includes_title">Includes the following:</div>
                            <ul class="includes_list">
                                <li v-for="asset in category[1].offer.assets" :key="asset">
                                    {{ asset.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="offer_details">
                            <ul class="includes_list">
                                <li>{{ item.timeline }}</li>
                                <li>{{ item.cost }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="whats_next">
                    <div class="discovery_intro">
                        <div class="offer_title">What's Next</div>
                    </div>
                    <div class="whats_next_group">
                        <div class="group">
                            <div class="form_question">Would you like to learn more about any of these services?</div>
                            <select v-model="learn_more_identity">
                                <option disabled value="">Choose One</option>
                                <option v-for="entry in category[1].interests" :key="entry">{{ entry.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="service == category[2].name">
                <div class="discovery_intro">
                    <div class="discovery_title">{{ category[2].name }}</div>
                    <div class="discovery_text">
                        {{ category[2].description }}
                    </div>
                </div>
                <div class="offer">
                    <div class="offer_title">what we offer</div>
                    
                    <div v-for="item in category[2].offer"  :key="item" class="offer_item" >
                        <div class="offer_item_wrapper">
                            <div class="offer_number">{{ item.id }}</div> 
                            <div class="offer_highlight">{{ item.name }}</div>
                        </div>
                        <div class="offer_description">
                            {{ item.description }}
                        </div>
                        <div class="offer_includes">
                            <div class="includes_title">Includes the following:</div>
                            <ul class="includes_list">
                                <li v-for="asset in category[2].offer.assets" :key="asset">
                                    {{ asset.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="offer_details">
                            <ul class="includes_list">
                                <li>{{ item.timeline }}</li>
                                <li>{{ item.cost }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="whats_next">
                    <div class="discovery_intro">
                        <div class="offer_title">What's Next</div>
                    </div>
                    <div class="whats_next_group">
                        <div class="group">
                            <div class="form_question">Would you like to learn more about any of these services?</div>
                            <select v-model="learn_more_identity">
                                <option disabled value="">Choose One</option>
                                <option v-for="entry in category[2].interests" :key="entry">{{ entry.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="service == category[3].name">
                <div class="discovery_intro">
                    <div class="discovery_title">{{ category[3].name }}</div>
                    <div class="discovery_text">
                        {{ category[3].description }}
                    </div>
                </div>
                <div class="offer">
                    <div class="offer_title">what we offer</div>
                    
                    <div v-for="item in category[3].offer"  :key="item" class="offer_item" >
                        <div class="offer_item_wrapper">
                            <div class="offer_number">{{ item.id }}</div> 
                            <div class="offer_highlight">{{ item.name }}</div>
                        </div>
                        <div class="offer_description">
                            {{ item.description }}
                        </div>
                        <div class="offer_includes">
                            <div class="includes_title">Includes the following:</div>
                            <ul class="includes_list">
                                <li v-for="asset in category[3].offer.assets" :key="asset">
                                    {{ asset.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="offer_details">
                            <ul class="includes_list">
                                <li>{{ item.timeline }}</li>
                                <li>{{ item.cost }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="whats_next">
                    <div class="discovery_intro">
                        <div class="offer_title">What's Next</div>
                    </div>
                    <div class="whats_next_group">
                        <div class="group">
                            <div class="form_question">Would you like to learn more about any of these services?</div>
                            <select v-model="learn_more_identity">
                                <option disabled value="">Choose One</option>
                                <option v-for="entry in category[3].interests" :key="entry">{{ entry.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="step == 5" class="summary">
            <div class="form_header">The Results are in, {{ client_name }}!</div>
            <div class="your_selection">
                <div class="offer_title">
                    You Selected
                </div>
                <div class="your_selection_title">
                    {{ service }}
                </div>
            </div>
            <div class="about_business">
                <ul class="about_list">
                    <li>You are {{ biz_type }}</li>
                    <li>{{marketing}}</li>
                    <li>{{ website }}</li>
                    <li>{{ management }}</li>
                </ul>
            </div>

            <div class="services_summary">
                <div class="services_intro">
                    <div class="offer_title">
                        Services
                    </div>
                    <div class="offer_description">
                        We’re in this together.  We believe in collaboration and know it takes a team to make all the pieces work well.  Let’s talk about what’s possible.
                    </div>
                </div>
                <div class="recommended">
                    <div class="offer_title">- Recommended</div>

                    <ul class="">
                        <li><span>1</span>{{ strategy.select_one }}</li>
                        <li><span>2</span>{{ strategy.select_two }}</li>
                    </ul>
                </div>
                <div class="interested">
                    <div class="offer_title">- Interested</div>
                    <div class="">You are interested in {{ learn_more_strategy }}</div>
                </div>
                <div class="next_wrapper">
                    <div class="next_title">Next Steps</div>
                    <div class="offer_description">We have a complimentary session available to learn about your goals + opportunities</div>
                    <a class="" href="">
                        <div>Schedule w/ Us</div>
                    </a>
                </div>
                
            </div>


        </section>

        <div class="button_wrapper">
            <div class="frow justify-start">
                <button 
                v-if="step != 1"
                @click.prevent="prevStep"
                class="prev_button">Previous Step</button>

                <button 
                v-if="step != totalsteps"
                @click.prevent="nextStep"
                class="next_button">Next Step</button>

                <button 
                v-if="service == Strategy"
                @click.prevent="strategyStep"
                class="next_button">View Strategy</button>

            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DiscoveryForm',
        data() {
            return {
                step: 1,
                totalsteps: 5,
                client_name:'',
                biz_type:'',
                marketing:'',
                website:'',
                systems:'',
                service:'',
                learn_more_strategy:'',
                learn_more_identity: '',
                
                category: [
                    {
                        id:1,
                        name: "Strategy",
                        description: "How do you feel about your business planning and decision making?We provide consulting that helps us learn about your specific needs.  We promote collaboration + expansion.  Always global, never local.",
                        
                        interests: [
                            { name: "Research + Insights"},
                            { name: "Strategy Consulting" },
                            { name: "Not interested" }
                        ],

                        offer: [
                            {
                                id: 1,
                                name: "Research + Insights",
                                description: "This includes providing insights for your business and industry.  This is essentially a research digest of market trends, product development, new markets and better customer experiences.",

                                assets: [
                                    { name: "Personalized Business Insights" }
                                ],

                                timeline: "2 - 4 weeks",
                                cost: "starting at $1,500"
                            },
                            {
                                id: 2,
                                name: "Strategy Consulting",
                                description: "We start with our complimentary session and learn how we can work together.  We create a plan of action that provides insights, ideas and strategy for launching your next product or pivoting to a new market.",

                                assets: [
                                    { name: "One Month Consulting"}
                                ],

                                timeline: "2 - 4 weeks",
                                cost: "starting at $500"
                            }
                        ]
                    },
                    {
                        id:2,
                        name: "Identity",
                        description: "Is your presentation solid? It all starts with a name, logo, website and products + services to sell.  This can be the start of charging confident pricing and pushing go on the next project.",

                        interests: [
                            { name: "The Starter"},
                            { name: "E-commerce Website" },
                            { name: "Logo + Animation" },
                            { name: "Brand Foundation Track" },
                            { name: "Not interested" }
                        ],

                        offer: [
                            {
                                id: 1,
                                name: "The Starter",
                                description: "This includes providing strategy and design for the following:",

                                assets: [
                                    {name:"One Page Website"}, 
                                    {name:"Logo"}, 
                                    {name:"Brand Guide"},
                                    {name:"Social Media Templates"}
                                ],

                                timeline: "4 - 6 weeks",
                                cost: "starting at $1,500"
                            },
                            {
                                id: 2,
                                name: "E-commerce Website",
                                description: "We design and develop platforms to sell products and services.  We support these platforms:",

                                assets: [
                                    {name:"Squarespace"}, 
                                    {name:"Shopify"}
                                ],

                                timeline: "4 - 6 weeks",
                                cost: "starting at $2,500"
                            },
                            {
                                id: 3,
                                name: "Logo + Animation",
                                description: "We work with you to create the concept and design of your logo",

                                assets: [
                                    {name:"Text + Graphic Logo"}, 
                                    {name:"Animation"}
                                ],

                                timeline: "4 weeks",
                                cost: "starting at $500"
                            },
                            {
                                id: 4,
                                name: "Brand Foundation Track",
                                description: "We work with our clients to develop a set of tools to prepare them for a fresh start with their offerings.",

                                assets: [
                                    {name:"Brand Design"}, 
                                    {name:"Content Strategy"}, 
                                    {name:"E-commerce Website"}, 
                                    {name:"Campaigns"}
                                ],

                                timeline: "6 - 9 months",
                                cost: "contact for pricing"
                            }
                        ]
                    },
                    {
                        id:3,
                        name: "Organization",
                        description: "Is your business organized? Structure is the key for providing great customer service and building customer retention.",

                        interests: [
                            { name: "The Efficiency"},
                            { name: "Not interested" }
                        ],

                        offer: [
                            {
                                id: 1,
                                name: "The Efficiency",
                                description: "This focuses on business operations and includes providing strategy and design for the following:",

                                assets: [
                                    {name:"A Business Dashboard"}, 
                                    {name:"CRM for Client Management"}, 
                                    {name:"Systems Design"}
                                ],

                                timeline: "4 - 6 weeks",
                                cost: "starting at $1,500"
                            }
                        ]
                    },
                    {
                        id:4,
                        name: "Management",
                        description: "Can you benefit from having a team manage your marketing + strategy? We provide our services based on monthly retainers.  We assist you in the following ways:",

                        interests: [
                            { name: "The Activation"},
                            { name: "Management Plans" },
                            { name: "Not interested" }
                        ],

                        offer: [
                            {
                                id: 1,
                                name: "The Activation",
                                description: "This is for brands that need a simple setup for producing content on a monthly basis.",

                                assets: [
                                    {name:"Instagram Grid Curation"}, 
                                    {name:"9 Posts"}, 
                                    {name:"1 Email"}
                                ],

                                timeline: "3 month commitment",
                                cost: "starting at $375"
                            },
                            {
                                id: 2,
                                name: "Management Plans",
                                description: "Our plans can include any of the following below:",

                                assets: [
                                    {name:"Email & Social Media Management"}, 
                                    {name:"Website Management"}, 
                                    {name:"Marketing Campaigns"}, 
                                    {name:"Analytics"}
                                ],

                                timeline: "3 month commitment",
                                cost: "contact for details"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            prevStep: function() {
                this.step--;
            },
            nextStep: function() {
                this.step++;
            }
        }
    }
</script>
<style lang="scss">
    @import "../styles/layout.scss";
    @import "../styles/variables.scss";

    .discovery_form_wrapper {
        padding:125px 50px;
        color:$white;
    }
</style>