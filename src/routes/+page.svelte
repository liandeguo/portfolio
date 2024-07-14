<!-- <div id="vim">
    <p>-- INSERT --</p>
    <p>1,2</p>
    <p>All</p>
</div> -->

<script>
    let options = [
        {
            name: "[01] More About Me",
            link: "aboutme",
        },
        {
            name: "[02] My Skills",
            link: "myskills",
        },
        {
            name: "[03] My Work",
            link: "mywork",
        },
        {
            name: "[04] Personal Projects",
            link: "mywork",
        },
        {
            name: "[05] Contact & Social Media",
            link: "contact",
        },
    ];
    let selected = -1;
    function onKeyDown(e) {
        switch (e.keyCode) {
            case 40:
                if (selected >= -1) {
                    selected = (selected + 1) % options.length;
                }
                break;
            case 74:
                if (selected >= -1) {
                    selected = (selected + 1) % options.length;
                }
                break;

            case 38:
                if (selected > 0) {
                    selected = (selected - 1) % options.length;
                }
                break;
            case 75:
                if (selected > 0) {
                    selected = (selected - 1) % options.length;
                }
                break;
            case 13:
                if (selected == 0) {
                    window.location = "aboutme";
                }
                if (selected == 1) {
                    window.location = "myskills";
                }
                if (selected == 2) {
                    window.location = "mywork";
                }
                if (selected == 3) {
                    window.location = "personalprojects";
                }
                if (selected == 4) {
                    window.location = "contact";
                }
        }
    }
</script>

<div style="">
    <h1>&lt;Liande Guo/&gt;</h1>
    <pre>
        Hi! I'm Liande a passionate Frontend Developer from Germany 

    </pre>
    {#each options as option, index}
        <p class="selectable" class:selectedH={index == selected}>
            <a id="select_a" href={option.link}>{option.name}</a>
        </p>
    {/each}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
