
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "modeMixin",

  data: function () {
    return {
      countRecources: 0,
      limitOfResourcePerPage: { type: Number },
    };
  },

  computed: {
    ...mapState("menuStatus", ["mode"]),
  },

  methods: {
    ...mapMutations("menuStatus", ["setMode"]),

    cleanRecourseAndGetRecoursesInDataBase(recourse, recources) {
      this.setMode("list");
      this.recourse = {};
      this.$axios.get(recources).then((res) => {
        this[recources] = res.data;
      });
    },
    newRecourseView(old) {
      this.setMode("save");
      this[old] = {};
    },
    viewSave(data, recourse) {
      this.setMode("save");
      this[recourse] = { ...data };
    },
    viewRemove(data, recourse) {
      console.log();
      this.setMode("remove");
      this[recourse] = { ...data };
    },
    saveRecourseToDataBase(recource, recources) {
      const method = recource.id ? "put" : "post";
      const id = recource.id ? `/${recource.id}` : "";
      this.$axios[method](`${recources}${id}`, recource)
        .then(() => {
          this.$showSuccess();
          this.cleanRecourseAndGetRecoursesInDataBase(recource, recources);
        })
        .catch(this.$showError);
    },
    removeRecourseToDataBase(recource, recources) {
      const id = recource.id;
      this.$axios
        .delete(`${recources}/${id}`)
        .then(() => {
          this.$showSuccess();
          this.cleanRecourseAndGetRecoursesInDataBase(recource, recources);
        })
        .catch(this.$showError);
    },
  },
};
</script>

