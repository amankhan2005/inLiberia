 import Helpdesk from "../models/helpdesk.js";
import sendEmail from "../utils/sendEmail.js";


export const submitHelpdesk = async (req, res) => {

try {

const { name, email, phone, query } = req.body;


/* ---------------- VALIDATION ---------------- */

if (!name || !email || !phone || !query) {

return res.status(400).json({

message: "All fields are required"

});

}


/* ---------------- SAVE TO DATABASE ---------------- */

const ticket = await Helpdesk.create({

name,
email,
phone,
query

});



/* =====================================================
ADMIN EMAIL
===================================================== */


await sendEmail({

ownerEmail: "info@knowliberia.com",

visitorName: name,

visitorEmail: email,

subject: "New Helpdesk Query",

message: `

<div style="background:#f4f4f4;padding:30px;font-family:Arial">

<div style="max-width:600px;margin:auto;background:white;border-radius:10px;overflow:hidden">


<div style="background:#dc2626;color:white;padding:20px;font-size:24px;font-weight:bold">

inLiberia

</div>


<div style="padding:25px;color:#333">


<h2>New Helpdesk Query Received</h2>


<p><strong>Ticket ID:</strong> ${ticket._id}</p>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Phone:</strong> ${phone}</p>


<p><strong>Query:</strong></p>

<p style="background:#f9f9f9;padding:15px;border-radius:6px">

${query}

</p>


</div>


<div style="text-align:center;padding:15px;background:#fafafa;color:#777;font-size:12px">

Be Verified • inLiberia

</div>


</div>

</div>

`,

listingTitle: "Helpdesk",

listingId: ticket._id

});



/* =====================================================
USER CONFIRMATION EMAIL
===================================================== */


await sendEmail({

ownerEmail: email,

visitorName: "Know Liberia Support",

visitorEmail: "info@knowliberia.com",

subject: "Your Helpdesk Request Received",

message: `

<div style="background:#f4f4f4;padding:30px;font-family:Arial">

<div style="max-width:600px;margin:auto;background:white;border-radius:10px;overflow:hidden">


<div style="background:#dc2626;color:white;padding:20px;font-size:24px;font-weight:bold">

inLiberia

</div>


<div style="padding:25px;color:#333">


<h2>Hello ${name},</h2>


<p>

Thank you for contacting <strong>inLiberia</strong>.

</p>


<p>

Your helpdesk request has been received successfully.

</p>


<p><strong>Ticket ID:</strong> ${ticket._id}</p>


<div style="background:#f9f9f9;padding:15px;border-radius:6px">

<strong>Your Query:</strong>

<p>${query}</p>

</div>


<p>

Our team will respond shortly.

</p>


<p>

Regards,<br>

inLiberia Support Team

</p>


</div>


<div style="text-align:center;padding:15px;background:#fafafa;color:#777;font-size:12px">

Be Verified • inLiberia

</div>


</div>

</div>

`,

listingTitle: "Helpdesk",

listingId: ticket._id

});



/* ---------------- RESPONSE ---------------- */


res.status(200).json({

success: true,

message: "Helpdesk query submitted successfully",

ticketId: ticket._id

});


}


catch (error) {


console.error("HELPDESK ERROR:", error);


res.status(500).json({

success: false,

message: "Failed to submit helpdesk query"

});


}

};