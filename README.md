---
home: true
bgImage: /images/jpg/6.jpg
heroText: VANILLA NOTE
tagline:
---

<style>
.hero {
  padding: 0 0 !important;
}
.overlay {
  align-items: center;
  justify-content: center;
  height:100%;
  width:100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 0 20px;
}
</style>

<script>
export default {
  props: ['slot-key'],
  data () {
    return {
      index : 7
    }
  },
  mounted () {
    if(localStorage.getItem("heroImageNum") == null){
      localStorage.setItem("heroImageNum", 1);
      localStorage.saveKey = "heroImageNum";
    }
    localStorage.setItem("heroImageNum", (Number(localStorage.getItem("heroImageNum")) + 1));
    localStorage.saveKey = "heroImageNum";
    if(localStorage.getItem("heroImageNum") <= 7){
      document.getElementsByClassName("hero")[0].style.backgroundImage = document.getElementsByClassName("hero")[0].style.backgroundImage.replace(/[0-9]/g, (localStorage.getItem("heroImageNum")).toString());
      }else{
      document.getElementsByClassName("hero")[0].style.backgroundImage = document.getElementsByClassName("hero")[0].style.backgroundImage.replace(/[0-9]/g, "1");
      localStorage.setItem("heroImageNum", 1);
      localStorage.saveKey = "heroImageNum";
    }
  }
}
</script>
