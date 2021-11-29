register: async (parent, args, { transporter, models, EMAIL_SECRET }) => {
  const hashedPassword = await bcrypt.hash(args.password, 12);
  const user = await models.User.create({
    ...args,
    password: hashedPassword,
  });

  // async email
  jwt.sign(
    {
      user: _.pick(user, 'id'),
    },
    EMAIL_SECRET,
    {
      expiresIn: '1d',
    },
    (err, emailToken) => {
      const url = `http://localhost:3000/confirmation/${emailToken}`;

      transporter.sendMail({
        to: args.email,
        subject: 'Confirm Email',
        html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
      });
    },
  );