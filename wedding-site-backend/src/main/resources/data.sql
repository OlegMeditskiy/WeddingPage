INSERT INTO roles(name) VALUES('ROLE_USER') ON CONFLICT (name) DO NOTHING;
INSERT INTO roles(name) VALUES('ROLE_ADMIN')ON CONFLICT (name) DO NOTHING;

INSERT INTO story(id,story_title,story) VALUES ('1','Story title','Story text') ON CONFLICT (id) DO NOTHING;

INSERT INTO dress_code(id,text) VALUES ('1','Dress code text') ON CONFLICT (id) DO NOTHING;

INSERT INTO about_us(id,name,about) VALUES ('1','Name 1','About') ON CONFLICT (id) DO NOTHING;

INSERT INTO about_us(id,name,about) VALUES ('2','Name 2','About') ON CONFLICT (id) DO NOTHING;

INSERT INTO invitation_text(id,invitation_text) VALUES ('1','Тext of invitation') ON CONFLICT (id) DO NOTHING;

INSERT INTO place(id,place) VALUES ('1','Place') ON CONFLICT (id) DO NOTHING;

INSERT INTO program(id,program) VALUES ('1','Program text') ON CONFLICT (id) DO NOTHING;

INSERT INTO wedding_date(id,wedding_date) VALUES ('1','10-12-2006') ON CONFLICT (id) DO NOTHING;




