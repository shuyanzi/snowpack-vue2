<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Vue, Component, Prop } from 'vue-property-decorator'
// import tsSuppoort from 'vue-tsx-support'
// import vueDecorator from 'vue-property-decorator'
// const VueComponent = tsSuppoort.Component
// const Vue = vueDecorator.Vue
// const Component = vueDecorator.Component
// const Prop = vueDecorator.Prop
// console.log(VueComponent)

@Component
export default class HelloWorld extends VueComponent<{}> {
  @Prop({ type: String }) msg!: string
  created() {
  }

  mounted() {
  }

  render() {
    return (<div>
      {this.msg}
      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      </ul>
    </div>)
  }
}
</script>