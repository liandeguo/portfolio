<script>
    function calcAge(birthYear) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age;
    }

    const age = calcAge(2010);
</script>

<div class="element">
    <p style="font-weight: bold;">About Me</p>

    <p>
        My Name: Liande Guo
        <br>
        My Age: {age}
        <br>
        My Occupation: Student
        <br>
        What I do: Frontend Development & Graphic Design
        <br>
        <br>
    </p>
    <a href="../">- Back</a>
</div>
