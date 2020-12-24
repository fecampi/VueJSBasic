
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "modeMixin",

  computed: {
    ...mapState("menuStatus", ["mode"]),
  },

  methods: {
    ...mapMutations("menuStatus", ["setMode"]),
  },
  
};
</script>

