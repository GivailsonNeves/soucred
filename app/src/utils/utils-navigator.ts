class UtilsNavigator {
    public static gotoSectionName(elementName: string) {
        const scrollTop = document.getElementById(elementName)?.offsetTop || 0;
        window.scrollTo(0, scrollTop - 120 || 0);
    }
    public static gotoTop() {
        UtilsNavigator.gotoSectionName('/');
    }
}

export default UtilsNavigator;