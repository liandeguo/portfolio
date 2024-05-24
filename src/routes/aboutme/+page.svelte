<script>
    function calcAge(birthYear) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age;
    }

    const age = calcAge(2010);
</script>

<div>
    <p style="font-weight: bold;">About Me</p>

    <pre>
        My Name: Liande Guo
        My Age: {age}
        My Occupation: Student
        What I do: Frontend Development & Graphic Design
        
    </pre>
    <a href="../">- Back</a>
</div>
